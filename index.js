import fs from 'fs';
import constants from './helper/constants';
import logger from './helper/logger';
import moment from 'moment';
import { groupBy, forEach, maxBy, sortBy } from 'lodash';

/**
 * @namespace IPClicksCalculator
 * @description Get Most expensive Clicks for each IP adddress within each hour period.
 */
export const IPClicksCalculator = {
    /** To Read Content fron clicks.json File */
    getIpClickList() {
        console.time();
        const self = this;
        try {
            fs.readFile(constants.CLICK_JSON_PATH, function(err, data) {
                if (err) throw err;
                const clicks = JSON.parse(data);
                if (clicks && clicks.length) {
                    self.createGroupsForEachIp(clicks);
                } else {
                    logger(constants.NO_CLICKS_AVAIBALE_MSG);
                    self.emptyResultFile();
                }
            });
        } catch (err) {
            logger(`${constants.DEFAULT_ERROR_MSG}${err.message}`);
            self.emptyResultFile();
        }
    },

    /** To create grouping of the clicks for each unique IP address
     * @param clickList : input list of clicks
     */
    createGroupsForEachIp(clickList) {
        const iPDetails = groupBy(clickList, 'ip');
        this.removeIpGroupsWithMoreThanTenClicks(iPDetails);
    },

    /** To remove particular IP groups having click count > 10
     * @param ipSets : IP address grouped object { <ip address> : [clicks for respective IP] }
     */
    removeIpGroupsWithMoreThanTenClicks(ipSets) {
        for (let key in ipSets) {
            if (
                key &&
                ipSets[key] &&
                ipSets[key].length > constants.IP_CLICKS_LIMIT
            ) {
                delete ipSets[key];
            }
        }
        if (ipSets && Object.keys(ipSets).length > 0) {
            this.applyPerHourConditionOnEachIPGroup(ipSets);
        } else {
            logger(constants.ALL_IPS_MORE_THEN_UPPER_LIMIT);
        }
    },

    /** apply one hour time span condition on each IP group */
    applyPerHourConditionOnEachIPGroup(ipSets) {
        let results = [];
        for (let key in ipSets) {
            this.getMostExpensiveClick(ipSets[key], clickItem => {
                results.push(clickItem);
            });
        }
        this.createResultSetFile(results, this.writeCallBack);
    },

    /** get the most expensive list per IP address */
    getMostExpensiveClick(ipData, cb) {
        try {
            const timeStampGroups = groupBy(ipData, function(ip) {
                return moment(ip.timestamp, constants.DATE_FORMAT_TO_COMPARE);
            });
            if (timeStampGroups) {
                const timeStampKeys = Object.keys(timeStampGroups);
                if (timeStampKeys && timeStampKeys.length) {
                    forEach(timeStampKeys, tsg => {
                        const sortedTimeStamps = sortBy(
                            timeStampGroups[tsg],
                            function(dateObj) {
                                return new Date(dateObj.timestamp);
                            }
                        );
                        const val = maxBy(sortedTimeStamps, 'amount');
                        if (val) {
                            cb(val);
                        } else {
                            logger(
                                `${constants.NOT_A_VALID_CLICK} ${timeStampGroups[tsg]}`
                            );
                        }
                    });
                } else {
                    cb('');
                }
            } else {
                cb('');
            }
        } catch (err) {
            cb('');
        }
    },

    emptyResultFile() {
        this.createResultSetFile([], this.writeCallBack);
    },

    /** Write the resultant clicks array into json filer */
    createResultSetFile(resultset, cb) {
        fs.writeFile(
            constants.RESULTANT_JSON_FILE,
            JSON.stringify(resultset),
            cb
        );
    },

    writeCallBack(err) {
        if (err) {
            logger(constants.WRITE_FILE_FAILED);
            throw err;
        }
        logger(constants.RESULTS_WRITTEN);
        console.timeEnd();
    }
};

IPClicksCalculator.getIpClickList();

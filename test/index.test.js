import { IPClicksCalculator } from './../index';
import assert from 'assert';
import fs from 'fs';

const ipCalc = IPClicksCalculator;

describe('createResultSetFile()', function() {
    it('should write all results into resultSet.json', function(done) {
        const resultset = [
            { ip: '22.22.22.22', timestamp: '3/11/2016 02:02:58', amount: 7.0 },
            { ip: '11.11.11.11', timestamp: '3/11/2016 02:12:32', amount: 6.5 },
            {
                ip: '11.11.11.11',
                timestamp: '3/11/2016 02:13:11',
                amount: 7.25
            },
            {
                ip: '44.44.44.44',
                timestamp: '3/11/2016 02:13:54',
                amount: 8.75
            },
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:02:45',
                amount: 11.0
            },
            { ip: '44.44.44.44', timestamp: '3/11/2016 06:32:42', amount: 5.0 },
            { ip: '22.22.22.22', timestamp: '3/11/2016 06:35:12', amount: 2.0 },
            {
                ip: '11.11.11.11',
                timestamp: '3/11/2016 06:45:01',
                amount: 12.0
            },
            {
                ip: '55.55.55.55',
                timestamp: '3/11/2016 14:02:54',
                amount: 4.25
            },
            {
                ip: '55.55.55.55',
                timestamp: '3/11/2016 14:03:04',
                amount: 5.25
            },
            {
                ip: '55.55.55.55',
                timestamp: '3/11/2016 15:12:55',
                amount: 6.25
            },
            { ip: '22.22.22.22', timestamp: '3/11/2016 16:02:36', amount: 8.0 },
            { ip: '55.55.55.55', timestamp: '3/11/2016 16:22:11', amount: 8.5 },
            {
                ip: '55.55.55.55',
                timestamp: '3/11/2016 17:18:19',
                amount: 11.25
            },
            { ip: '55.55.55.55', timestamp: '3/11/2016 18:19:20', amount: 9.0 },
            { ip: '22.22.22.22', timestamp: '3/11/2016 23:59:59', amount: 9.0 }
        ];
        ipCalc.createResultSetFile(resultset, err => {
            assert.strictEqual(fs.existsSync('resultSet.json'), true);
            const data = fs.readFileSync('resultSet.json');
            if (data) {
                if (err) assert.fail();
                console.log('datatatatata', data);
                const clicks = JSON.parse(data);
                assert.strictEqual(clicks.length, resultset.length);
            } else {
                assert.fail();
            }
            done();
        });
    });
});

describe('removeIpGroupsWithMoreThanTenClicks()', function() {
    it('should remove IP records having more than 10 clicks', function(done) {
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ],
            '33.33.33.33': [
                {
                    ip: '33.33.33.33',
                    timestamp: '3/11/2016 07:02:54',
                    amount: 15.75
                }
            ],
            '55.55.55.55': [
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 16:22:11',
                    amount: 8.5
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 17:18:19',
                    amount: 11.25
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 18:19:20',
                    amount: 9.0
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 16:22:11',
                    amount: 8.5
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 17:18:19',
                    amount: 11.25
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 18:19:20',
                    amount: 9.0
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 16:22:11',
                    amount: 8.5
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 17:18:19',
                    amount: 11.25
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 18:19:20',
                    amount: 9.0
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 16:22:11',
                    amount: 8.5
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 17:18:19',
                    amount: 11.25
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 18:19:20',
                    amount: 9.0
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 16:22:11',
                    amount: 8.5
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 17:18:19',
                    amount: 11.25
                },
                {
                    ip: '55.55.55.55',
                    timestamp: '3/11/2016 18:19:20',
                    amount: 9.0
                }
            ]
        };
        ipCalc.removeIpGroupsWithMoreThanTenClicks(IPGroupedData);
        const keysLength = Object.keys(IPGroupedData);
        assert.strictEqual(keysLength.length, 3);
        done();
    });
});

describe('getMostExpensiveClick()', function() {
    it('should return click with maximun amount for the IP (22.22.22.22)', function(done) {
        const mostExpensiveClick = {
            ip: '22.22.22.22',
            timestamp: '3/11/2016 05:26:45',
            amount: 16.0
        };
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 14.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:26:45',
                    amount: 16.0
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ],
            '33.33.33.33': [
                {
                    ip: '33.33.33.33',
                    timestamp: '3/11/2016 07:02:54',
                    amount: 15.75
                }
            ]
        };
        ipCalc.getMostExpensiveClick(
            IPGroupedData['22.22.22.22'],
            clickValue => {
                assert.strictEqual(
                    clickValue.amount,
                    mostExpensiveClick.amount
                );
            }
        );

        done();
    });

    it('should return all the most expensive clicks(maximun amount) for 2 different one hour time periods for IP (22.22.22.22)', function(done) {
        const mostExpensiveClick = [
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:05:45',
                amount: 14.0
            },
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 06:26:45',
                amount: 16.0
            }
        ];
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 14.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 06:26:45',
                    amount: 16.0
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ],
            '33.33.33.33': [
                {
                    ip: '33.33.33.33',
                    timestamp: '3/11/2016 07:02:54',
                    amount: 15.75
                }
            ]
        };
        const resultArr = [];
        ipCalc.getMostExpensiveClick(
            IPGroupedData['22.22.22.22'],
            clickValue => {
                resultArr.push(clickValue);
            }
        );

        assert.strictEqual(resultArr.length, mostExpensiveClick.length);
        if (resultArr.length > 0) {
            assert.strictEqual(
                resultArr[0].amount,
                mostExpensiveClick[0].amount
            );
        } else {
            assert.fail();
        }

        done();
    });

    it('should return most expensive clicks(maximun amount) on 2 different Dates for IP (22.22.22.22)', function(done) {
        const mostExpensiveClick = [
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:05:45',
                amount: 14.0
            },
            {
                ip: '22.22.22.22',
                timestamp: '4/11/2016 06:26:45',
                amount: 16.0
            }
        ];
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 14.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 16.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 10.5
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ]
        };
        const resultArr = [];
        ipCalc.getMostExpensiveClick(
            IPGroupedData['22.22.22.22'],
            clickValue => {
                resultArr.push(clickValue);
            }
        );
        assert.strictEqual(resultArr.length, mostExpensiveClick.length);
        if (resultArr.length > 1) {
            assert.strictEqual(
                resultArr[1].amount,
                mostExpensiveClick[1].amount
            );
        } else {
            assert.fail();
        }
        done();
    });

    it('should return 2 most expensive clicks(maximun amount) on 2 different Dates for IP (22.22.22.22)', function(done) {
        const mostExpensiveClick = [
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:05:45',
                amount: 14.0
            },
            {
                ip: '22.22.22.22',
                timestamp: '4/11/2016 06:26:45',
                amount: 16.0
            }
        ];
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 14.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 16.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 10.5
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ]
        };
        const resultArr = [];
        ipCalc.getMostExpensiveClick(
            IPGroupedData['22.22.22.22'],
            clickValue => {
                resultArr.push(clickValue);
            }
        );
        assert.strictEqual(resultArr.length, mostExpensiveClick.length);
        if (resultArr.length > 1) {
            assert.strictEqual(
                resultArr[1].amount,
                mostExpensiveClick[1].amount
            );
        } else {
            assert.fail();
        }
        done();
    });

    it('should return most expensive clicks(maximun amount) for all avaiable IPs (22.22.22.22,11.11.11.11)', function(done) {
        const mostExpensiveClick = [
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:05:45',
                amount: 14.0
            },
            {
                ip: '22.22.22.22',
                timestamp: '4/11/2016 06:26:45',
                amount: 16.0
            },
            {
                ip: '11.11.11.11',
                timestamp: '3/11/2016 02:13:11',
                amount: 7.25
            }
        ];
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 14.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 16.0
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '4/11/2016 06:26:45',
                    amount: 10.5
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: 6.5
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: 7.25
                }
            ]
        };
        const clickArr = [];
        for (let key in IPGroupedData) {
            ipCalc.getMostExpensiveClick(IPGroupedData[key], clickItem => {
                clickArr.push(clickItem);
            });
        }
        assert.strictEqual(clickArr.length, mostExpensiveClick.length);
        if (clickArr.length === 3) {
            clickArr.forEach((click, i) => {
                assert.strictEqual(click.amount, mostExpensiveClick[i].amount);
            });
        } else {
            assert.fail();
        }
        done();
    });

    it('should return no value in case of absense of click amount', function(done) {
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: null
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: ''
                }
            ],
            '11.11.11.11': [
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:12:32',
                    amount: null
                },
                {
                    ip: '11.11.11.11',
                    timestamp: '3/11/2016 02:13:11',
                    amount: null
                }
            ]
        };
        for (let key in IPGroupedData) {
            ipCalc.getMostExpensiveClick(IPGroupedData[key], clickItem => {
                assert.equal(clickItem, '');
            });
        }
        done();
    });

    it('should return earlier click in case of more than one click ties for same IP in same one house period', function(done) {
        const mostExpensiveClick = [
            {
                ip: '22.22.22.22',
                timestamp: '3/11/2016 05:02:45',
                amount: 11
            }
        ];
        const IPGroupedData = {
            '22.22.22.22': [
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:02:45',
                    amount: 11
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:05:45',
                    amount: 11
                },
                {
                    ip: '22.22.22.22',
                    timestamp: '3/11/2016 05:12:45',
                    amount: 11
                }
            ]
        };

        ipCalc.getMostExpensiveClick(
            IPGroupedData['22.22.22.22'],
            clickItem => {
                if (clickItem) {
                    assert.equal(
                        new Date(clickItem.timestamp),
                        new Date(mostExpensiveClick.timestamp)
                    );
                }
            }
        );
        done();
    });
});

describe('emptyResultFile()', function() {
    it('should empty resultSet Json', function(done) {
        ipCalc.emptyResultFile();
        setTimeout(() => {
            const data = fs.readFileSync('resultSet.json');
            if (data) {
                const clicks = JSON.parse(data);
                assert.strictEqual(clicks.length, 0);
            } else {
                assert.fail();
            }
            done();
        }, 1000);
    });
});

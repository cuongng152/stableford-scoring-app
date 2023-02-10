import * as React from 'react';
import {useState} from 'react';
import Layout from "../../layout";
import styles from "../../layout/layout.module.scss";
import {TextField} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import store from "../../store";
import {setMatchData} from "../../store/redux";
import ConfirmationDialog from "../agreement-log/ConfirmationDialog";

export default function PreMatch() {
    let holeIndexArray = []
    for (let i = 1; i < 19; i++) {
        holeIndexArray.push({
            value: i,
            label: i
        })
    }

    const holeParArray = [
        {
            value: '3',
            label: '3',
        },
        {
            value: '4',
            label: '4',
        },
        {
            value: '5',
            label: '5',
        },
    ];
    const timePlayArray = [
        {
            value: 'Morning',
            label: 'Morning',
        },
        {
            value: 'Afternoon',
            label: 'Afternoon',
        }
    ]
    const [holeIndex, setHoleIndex] = useState('1')
    const [holeLength, setHoleLength] = useState('')
    const [holePar, setHolePar] = useState('3')
    const [isDataValidated, setDataValidated] = useState(false)
    const getMatchData = () => store.getState()?.appReducer?.matchData
    const [matchDataInFlight, setMatchDataInFlight] = useState([])
    const backupMatchData = (localStorage.getItem('matchData') && JSON.parse(localStorage.getItem('matchData'))) || []
    const [dailyHandicap, setDailyHandicap] = useState(36)

    const onChangeHoleData = (event) => {
        const {id, innerText, value} = event.target || {}
        if (id === 'outlined-select-hole-index') {
            setHoleIndex(Number(innerText))
        }

        if (id === 'outlined-select-hole-par') {
            setHolePar(innerText)
        }

        if (id === 'outlined-select-hole-length') {
            setHoleLength(value)
        }

        if (id === 'outlined-select-time-play') {
            const date = (new Date()).toLocaleDateString()
            const holeCode = (date+innerText).replaceAll("/", '')
            localStorage.setItem('hole-code', holeCode)
        }

        if (id === 'outlined-select-daily-handicap') {
            setDailyHandicap(value)
            localStorage.setItem('daily-handicap', value)
        }

        if (holeIndex !== '' && holeLength !== 0 && holePar !== '') {
            setDataValidated(true)
        }
    }
    const calculateStablefordList = (matchData, dailyHandicap) => {
        let stablefordList = []
        if (dailyHandicap > 18) {
            const diff = dailyHandicap - 18
            matchData.map(obj => {
                let inFlightStableford = 0
                if (Number(obj.holeIndex) <= diff) {
                    inFlightStableford = Number(obj.holePar) + 2
                    stablefordList.push({'holePar': inFlightStableford})
                } else {
                    inFlightStableford = Number(obj.holePar) + 1
                    stablefordList.push({'holePar': inFlightStableford})
                }
                return stablefordList
            })
        }

        if (dailyHandicap < 18) {
            matchData.map(obj => {
                let inFlightStableford = 0
                if (Number(obj.holeIndex) <= dailyHandicap) {
                    inFlightStableford = Number(obj.holePar) + 1
                    stablefordList.push(inFlightStableford)
                } else {
                    inFlightStableford = Number(obj.holePar)
                    stablefordList.push(inFlightStableford)
                }
                return stablefordList
            })
        }
        localStorage.setItem('stableford-list', JSON.stringify(stablefordList))
    }
    const onClickHoleData = () => {
        let copyOfData = matchDataInFlight
        let inFlightData = {
            'holeIndex': holeIndex,
            'holeLength': holeLength,
            'holePar': holePar
        }
        setHoleLength('')
        copyOfData.push(inFlightData)
        setMatchDataInFlight(copyOfData)
        if (matchDataInFlight.length === 18) {
            store.dispatch(setMatchData(matchDataInFlight))
            localStorage.setItem("matchData", JSON.stringify(matchDataInFlight))
            calculateStablefordList(matchDataInFlight, dailyHandicap)
            setMatchDataInFlight([])
        }
    }

    return (
        <Layout>
            <div className={styles.contentWrapper}>
                <h4 className={`text-semi-bold font-black-1 text-center text-lg-start`}>
                    Welcome to the game, Charlie. Having Fun!
                </h4>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    Do the best you can. The next shot is always, the most important shot.
                </p>
                <p className={'text-semi-bold font-black-1 text-center text-lg-start'}>
                    But first, please input the few more details.
                </p>
                {backupMatchData.length === 18
                    ? <div>
                        <ConfirmationDialog navigation={'/play'} displayText={'Are you ready?'}
                                               descriptionText={`Let's tee off. Shall we?`} proceedText={'Tee off'}/>
                    </div>
                    :
                    <>
                        <div style={{width: "80%", display: "inline-grid", paddingTop: "10px", paddingBottom: "10px"}}>
                            <TextField
                                id="outlined-select-daily-handicap"
                                label="Handicap"
                                variant="outlined"
                                onChange={onChangeHoleData}
                                itemID={`daily-handicap`}
                                value={dailyHandicap}
                            />
                        </div>
                        <div style={{width: "80%", display: "inline-grid", marginBottom: "10px"}}>
                            <TextField
                                id="outlined-select-time-play"
                                select
                                label="Time"
                                helperText="Please select playing time"
                            >
                                {timePlayArray.map((option) => (
                                    <MenuItem
                                        id="outlined-select-time-play"
                                        onClick={onChangeHoleData}
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <h3>Hole {matchDataInFlight === [] ? backupMatchData.length + 1 : matchDataInFlight.length + 1}</h3>
                        <div style={{width: "80%", display: "inline-grid", marginBottom: "10px"}}>
                            <TextField
                                id="outlined-select-par"
                                select
                                label="Par"
                                helperText="Please select hole par"
                            >
                                {holeParArray.map((option) => (
                                    <MenuItem
                                        id="outlined-select-hole-par"
                                        onClick={onChangeHoleData}
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div style={{width: "80%", display: "inline-grid"}}>
                            <TextField
                                id="outlined-select-index"
                                select
                                label="Index"
                                helperText="Please select hole index"
                            >
                                {holeIndexArray.map((option) => (
                                    <MenuItem
                                        id="outlined-select-hole-index"
                                        onClick={onChangeHoleData}
                                        key={option.value}
                                        value={option.value}
                                    >
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>
                        </div>
                        <div style={{width: "80%", display: "inline-grid", paddingTop: "10px", paddingBottom: "10px"}}>
                            <TextField
                                id="outlined-select-hole-length"
                                label="Length(yards)"
                                variant="outlined"
                                onChange={onChangeHoleData}
                                itemID={`hole-length`}
                                value={holeLength}
                            />
                        </div>
                        <Button variant="contained"
                                onClick={onClickHoleData}
                                disabled={!isDataValidated}
                        >
                            {getMatchData().length === 0
                                ? (backupMatchData.length === 18 ? `Let's play` : 'Next Hole')
                                : getMatchData().length === 18 ? `Let's play` : 'Next Hole'
                            }
                        </Button>
                    </>}
            </div>
        </Layout>
    );
}
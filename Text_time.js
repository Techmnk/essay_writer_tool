import React, { useState } from 'react';
import Displaywatch from './Displaywatch';
import Stopwatch_Btn from './Stopwatch_Btn';
import "./Text_time.css"


function Text_time() {
    const [count, setcount] = useState(0)
    const [para, setpara] = useState(0)
    const [sent, setsent] = useState(0)
    const [char, setchar] = useState(0)
    const [del, setdel] = useState(0)
    const [time, setTime] = useState({ ms: 0, s: 0, m: 0 });
    const [interv, setInterv] = useState();
    const [status, setStatus] = useState(0);
    // Not started = 0
    // started = 1
    // stopped = 2

    const start = () => {
        run();
        setStatus(1);
        setInterv(setInterval(run, 10));
    };

    var updatedMs = time.ms, updatedS = time.s, updatedM = time.m;

    const run = () => {
        if (updatedM === 60) {
            updatedM = 0;
        }
        if (updatedS === 60) {
            updatedM++;
            updatedS = 0;
        }
        if (updatedMs === 100) {
            updatedS++;
            updatedMs = 0;
        }
        updatedMs++;
        return setTime({ ms: updatedMs, s: updatedS, m: updatedM });
    };

    const stop = () => {
        clearInterval(interv);
        setStatus(2);
    };

    const reset = () => {
        clearInterval(interv);
        setStatus(0);
        setTime({ ms: 0, s: 0, m: 0 })
    };

    const resume = () => start();


    // var counterstart = (function () {
    //     var executed = false;
    //     return function () {
    //         if (!executed) {
    //             executed = true;
    //             if (count === 1) {
    //                 start()

    //             }
    //         }
    //     };
    // })();


    const getWordCount = (e) => {

        // const chars = e.target.value.split("").filter(item => {
        //     return item !== "";
        // });

        const withOutSpace = e.target.value.replace(/\s+/g, '');

        const numWords = e.target.value.split(/\r?\n|\r|\s/).filter(item => {
            return item !== "";
        });

        const numParas = e.target.value.split(/\r?\n|\r/).filter(item => {
            return item !== "";
        });

        const numSent = e.target.value.split(/[.]|[!]|[?]/).filter(item => {
            return item !== "";
        });


        setchar(withOutSpace.length);
        setcount(numWords.length);
        setpara(numParas.length);
        setsent(numSent.length);

    };




    const hotkeys = (e) => {

        if (e.keyCode === 8 || e.keyCode === 46) {
            setdel(del + 1);
        }



        if (char === 0) {
            setdel(0)
        }

        // if (del === 0){
        //     alert("You have no backspace left!!")
        //     stop()
        //     window.location.reload();      

        // }
    }



    var main_words = 300;
    var cal = (count / main_words) * 100;
    cal = cal | 0;

    // function win_the_game() {
    //     if (main_words === count) {
    //         <div class="alert alert-success" role="alert">
    //             A simple success alert—check it out!
    //         </div>
    //         stop()
    //     }
    // }

    const progress = () => {
        var color = ""
        if (cal <= 25) {
            color = "warning"
        }

        if (cal > 25 && cal <= 50) {
            color = "info"
        }

        if (cal > 50 && cal <= 75) {
            color = "primary"
        }

        if (cal > 75) {
            color = "success"
        }

        if(cal>=100){
            color="danger"
        }

        return color;
    }


    return (
        <div className="text_time">

            <div className="text_area">
                <textarea onKeyDown={hotkeys} onChange={getWordCount} spellCheck="false" class="form-control" id="exampleFormControlTextarea1 myinput" rows="15"></textarea>
                <div className="progress progress-lg">
                    <div className={`progress-bar bg-${progress()}`} aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style={{ width: `${cal}%` }}></div>
                </div>

            </div>


            <div className="main-section">
                {/* <div class="btn-group me-2" role="group" aria-label="First group">
                        <button onChange={setten} type="button" class="btn btn-outline-success">10 min</button>
                        <button onClick={settwenty} type="button" class="btn btn-outline-info">20 min</button>
                        <button onClick={setthirty} type="button" class="btn btn-outline-warning">30 min</button>
                        <button onClick={setforty} type="button" class="btn btn-outline-danger">40 min</button>
                    </div> */}

                <div className="clock-holder">
                    <div className="stopwatch">
                        <Displaywatch time={time} />
                        <Stopwatch_Btn status={status} resume={resume} reset={reset} stop={stop} start={start} />
                    </div>
                </div>

                {/* <h4 className="count_button">Characters: {char} </h4> */}
                <h5 className="count_button">Words: {count} </h5>
                <h5 className="count_button">Sentences: {sent} </h5>
                <h5 className="count_button">Paragraphs: {para} </h5>
                <h5 className="count_button">Backspace used: {del}</h5>

            </div>


        </div>
    )
}

export default Text_time
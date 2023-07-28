import React, { useEffect, useRef, useState } from 'react'
import * as Tone from 'tone'

function useSounds() {
    const mySampler = useRef(null);

    const [isC, setIsC] = useState(false);
    const [isD, setIsD] = useState(false);
    const [isF, setIsF] = useState(false);
    const [isA, setIsA] = useState(false);

    useEffect(() => {
        const sampler = new Tone.Sampler({
            urls: {
                "C4": "C4.mp3",
                "D#4": "Ds4.mp3",
                "F#4": "Fs4.mp3",
                "A4": "A4.mp3",
            },
            release: 1,
            baseUrl: "https://tonejs.github.io/audio/salamander/",
        }).toDestination();
       
        Tone.loaded().then(() => {
            mySampler.current = sampler;
        });
    }, []);

    function play(note) {
        mySampler.current.triggerAttackRelease([note], 4)
    }

    function handleKeyDown({key}) {
        switch (key) {
            case "a":
                setIsC(true);
                play("C4");
                window.setTimeout(() => {
                    setIsC(false);
                }, 200);
                break;
            case "z":
                setIsD(true);
                play("d#4");
                window.setTimeout(() => {
                    setIsD(false);
                }, 200);
                break;
            case "e":
                setIsF(true);
                play("F#4");
                window.setTimeout(() => {
                    setIsF(false);
                }, 200);
                break;
            case "r":
                setIsA(true);
                play("A4");
                window.setTimeout(() => {
                    setIsA(false);
                }, 200);
                break;
            default:
                break;
        }
    }

    function handleSampleChange(note, file) {
        let fileURL = URL.createObjectURL(file);
        let buffer = new Tone.Buffer(fileURL);
        mySampler.current.add(note, buffer, () => {
            alert("sample successfully changed")
        })
    }

    useEffect(() => {
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      }
    }, [])
    
    const buttonList = [
        {
            soundPlay: () => play("C4"),
            isPlayed: isC,
            id: 'c',
            handleSampleChange: () => handleSampleChange("C4", (e) => e.target.files[0])
        },
        {
            soundPlay: () => play("D#4"),
            isPlayed: isD,
            id: 'd',
            handleSampleChange: () => handleSampleChange("D#4", (e) => e.target.files[0])
        },
        {
            soundPlay: () => play("F#4"),
            isPlayed: isF,
            id: 'f',
            handleSampleChange: () => handleSampleChange("F#4", (e) => e.target.files[0])
        },
        {
            soundPlay: () => play("A4"),
            isPlayed: isA,
            id: 'a',
            handleSampleChange: () => handleSampleChange("A4", (e) => e.target.files[0])
        },
    ];

    return { buttonList };
}

export default useSounds
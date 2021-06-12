import React, { Image } from 'react';

import bookImage from './images/book.png';
import speakImage from './images/speaking.png';
import listenImage from './images/listening.png';

const excerciseData = [
  {
    id: 1234567,
    image: bookImage,
    title: 'Reading Skills',
    amount: '2 Excercises',
  },
  {
    id: 7654321,
    image: speakImage,
    title: 'Speaking Skills',
    amount: '5 Excercises',
  },
  {
    id: 12345,
    image: listenImage,
    title: 'Listening Skills',
    amount: '8 Excercises',
  },
  {
    id: 123456722,
    image: '../src/images/book.png',
    title: 'Reading Skills2',
    amount: '22 Excecises',
  },
  {
    id: 765432122,
    image: '../src/images/speaking.png',
    title: 'Speaking Skills2',
    amount: '25 Excercises',
  },
  {
    id: 1234522,
    image: '../src/images/listening.png',
    title: 'Listening Skills2',
    amount: '28 Excercises',
  },
];

const ExcercisesCards = () => {
  return (
    <section className="excercisesContainer">
      {excerciseData.map((excercise) => {
        return (
          <div className="excerciseCard" key={excercise.id}>
            {' '}
            <p key={excercise.title} className=" excerciseTitle">
              {excercise.title}
            </p>
            <p key={excercise.amount} className=" excerciseAmount">
              {excercise.amount}
            </p>
            <img src={excercise.image} className=" excerciseImage"></img>
          </div>
        );
      })}
    </section>
  );
};

export default ExcercisesCards;

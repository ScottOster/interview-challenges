import React from 'react';

import bookImage from './images/book.png';
import speakImage from './images/speaking.png';
import listenImage from './images/listening.png';
import dotsImage from './images/dots.png';

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
    image: bookImage,
    title: 'Reading Skills2',
    amount: '22 Excecises',
  },
  {
    id: 765432122,
    image: speakImage,
    title: 'Speaking Skills2',
    amount: '25 Excercises',
  },
  {
    id: 1234522,
    image: listenImage,
    title: 'Listening Skills2',
    amount: '28 Excercises',
  },
  {
    id: 1234522,
    image: listenImage,
    title: 'Listening Skills2',
    amount: '28 Excercises',
  },
  {
    id: 765432122,
    image: speakImage,
    title: 'Speaking Skills2',
    amount: '25 Excercises',
  },
  {
    id: 1234522,
    image: listenImage,
    title: 'Listening Skills2',
    amount: '28 Excercises',
  },
  {
    id: 1234522,
    image: listenImage,
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
              <br></br>
              <span className="excerciseAmount">{excercise.amount}</span>
            </p>
            <img src={excercise.image} className=" excerciseImage"></img>
            <img src={dotsImage} className="eCardDots"></img>
          </div>
        );
      })}
    </section>
  );
};

export default ExcercisesCards;

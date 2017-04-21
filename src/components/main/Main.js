import React from 'react';
import {Destinations} from '../destinations/Destinations';
import {Budget} from '../budget/Budget';
import {Settings} from '../settings/Settings';

export const Main = () => {
  return (
    <main className="ho_card__content">
      <Destinations />
      <Budget />
      <Settings />
    </main>
  );
}

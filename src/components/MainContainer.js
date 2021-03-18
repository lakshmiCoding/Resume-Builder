import React from "react";
import { useForm, useStep} from 'react-hooks-helper';
import Register from "./Register";
import Home from "./Home";
import Resume from "./Resume";
import ResumeProvider from './ResumeContext';

const steps = [
  {id: "home"},
  { id: "register" },
  { id: "resume" },
];

export const MainContainer = () => {
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  switch (step.id) {
    case "home":
      return <Home navigation={navigation}/>
    case "register":
      return (
        <ResumeProvider>
          <Register navigation={navigation}/>
        </ResumeProvider>
      );
    case "resume":
      return (
      <ResumeProvider>
        <Resume navigation={navigation}/>
      </ResumeProvider>
      );
  }

  return (
    <div>
      <h1>Resume Builder</h1>
    </div>
  );
};

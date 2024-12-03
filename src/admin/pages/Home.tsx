import React, {useEffect} from 'react';
// @ts-ignore
import logo from '../extensions/logo.png';

export const Home = () => {
  useEffect(() => {
    document.title = 'Student Attendance';
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        fontFamily: 'Arial, sans-serif',
        textAlign: 'center',
      }}
    >
      <img
        src={logo}
        alt="Logo"
        style={{
          width: '250px',
          height: 'auto',
          marginBottom: '100px',
          marginTop: '-200px',
        }}
      />
      <span
        style={{
          fontSize: '24px',
          fontFamily: 'Arial, sans-serif',
          letterSpacing: '1px',
        }}
      >
        Student Attendance
      </span>
    </div>
  );
};

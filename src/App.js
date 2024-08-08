import { useEffect, useState, useCallback } from "react";
import "./App.css";
import { noOfWeeksInAYears } from "./components/no_of_weeks_in_a_year";

const App = () => {
  //*********************VARIABLES******************************
  const currentYear = new Date().getFullYear();
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [expectedAge, setExpectedAge] = useState("");
  const [expectedYear, setExpectedYear] = useState(null);
  const [onNext, setOnNext] = useState(false);
  let totalWeeks = 0;
  let pastWeeks = 0;
  let futureWeeks = 0;

  const handleSum = useCallback(() => {
    const x = parseInt(yearOfBirth, 10);
    const y = parseInt(expectedAge, 10);
    if (!isNaN(x) && !isNaN(y) && x > 0 && y > 0) {
      setExpectedYear(x + y);
      setOnNext(true);
    } else {
      setExpectedYear(null);
      setOnNext(false);
    }
  }, [yearOfBirth, expectedAge]);

  useEffect(() => {
    handleSum();
  }, [handleSum]);

  const lifePercentage =
    expectedYear !== null && !isNaN(yearOfBirth) && expectedAge > 0
      ? ((currentYear - parseInt(yearOfBirth, 10)) /
          parseInt(expectedAge, 10)) *
        100
      : 0;

  if (expectedYear !== null && !isNaN(yearOfBirth)) {
    const birthYear = parseInt(yearOfBirth, 10);
    totalWeeks = noOfWeeksInAYears(expectedYear - birthYear);
    pastWeeks = noOfWeeksInAYears(currentYear - birthYear);
    futureWeeks = totalWeeks - pastWeeks;

    // Ensure no negative lengths
    if (totalWeeks < 0) totalWeeks = 0;
    if (pastWeeks < 0) pastWeeks = 0;
    if (futureWeeks < 0) futureWeeks = 0;
  }

  const filledBoxes = Array.from({ length: pastWeeks }, (_, index) => (
    <div key={`filled-${index}`} className="filled-box"></div>
  ));

  const emptyBoxes = Array.from({ length: futureWeeks }, (_, index) => (
    <div key={`empty-${index}`} className="empty-box"></div>
  ));

  return (
    <div>
      <div className="navbar">
        Dotted Life
        <p>Know how much life you spend till now in dots</p>
        <p>Each dot represents a week or 7 days</p>
      </div>
      <div className="details">
        <input
          type="number"
          className="year-of-birth"
          onChange={(e) => setYearOfBirth(e.target.value)}
          placeholder="Enter Year Of Birth eg: 2001"
        />
        <input
          type="number"
          className="expected-age"
          onChange={(e) => setExpectedAge(e.target.value)}
          placeholder="Enter How Years You Live eg: 80"
        />
        {/* <button onClick={handleSum}>Next</button> */}
      </div>
      {onNext ? (
        <div>
          Age: {currentYear - parseInt(yearOfBirth, 10)}
          <br />
          <br />
          You have completed {lifePercentage.toFixed(2)}% of your life till{" "}
          {expectedYear}
        </div>
      ) : (
        <p></p>
      )}
      {onNext ? (
        <div className="Box-container">
          {filledBoxes}
          {emptyBoxes}
        </div>
      ) : (
        <div>
          Enter Your Date of Birth and How Many Years You Think You Live
        </div>
      )}
    </div>
  );
};

export default App;

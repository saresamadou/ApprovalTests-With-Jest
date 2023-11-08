import { defineFeature, loadFeature } from 'jest-cucumber';

const feature = loadFeature('features/leap-year.feature');

function leapYear(year: number): string {
  return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)).toString();
}

defineFeature(feature, (test) => {

  test("Typical Common Year 1", ({ when, then }) => {
    let isLeapYear: string;

    when(/^the user asks whether (\d+) is a leap year$/, (year) => {
      isLeapYear = leapYear(year);
    });

    then(/^it should respond with "(.*)"$/, (response) => {
      expect(isLeapYear).toBe(response);
    });
  });

  test("Typical Leap Year 1", ({ when, then }) => {
    let isLeapYear: string;

    when(/^the user asks whether (\d+) is a leap year$/, (year) => {
      isLeapYear = leapYear(year);
    });

    then(/^it should respond with "(.*)"$/, (response) => {
      expect(isLeapYear).toBe(response);
    });
  });

  test("Typical Common Year 2", ({ when, then }) => {
    let isLeapYear: string;

    when(/^the user asks whether (\d+) is a leap year$/, (year) => {
      isLeapYear = leapYear(year);
    });

    then(/^it should respond with "(.*)"$/, (response) => {
      expect(isLeapYear).toBe(response);
    });
  });

  test("Typical Leap Year 2", ({ when, then }) => {
    let isLeapYear: string;

    when(/^the user asks whether (\d+) is a leap year$/, (year) => {
      isLeapYear = leapYear(year);
    });

    then(/^it should respond with "(.*)"$/, (response) => {
      expect(isLeapYear).toBe(response);
    });
  });
});
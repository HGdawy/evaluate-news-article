import { checkUrl } from "../src/client/js/checkURL"

describe("Testing the checkUrl existence ", () => {
  test("Testing checkUrl() function", () => {
      expect(checkUrl).toBeDefined();
})});

describe("Testing the checkUrl if it's a function or not", () => {
  test("Testing checkUrl() function", () => {
      expect(typeof(checkUrl)).toBe("function");
})});

describe("Testing the URL", () => {
      test("Testing checkUrl() function", () => {
          const url = "https://patthomson.net/2020/11/30/plan-to-write/";
      expect(checkUrl(url)).toBeTruthy();
})});
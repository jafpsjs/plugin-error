import assert from "node:assert/strict";
import { describe, it } from "node:test";
import { toIdentifier } from "../to-identifier.js";


describe("toIdentifier", () => {
  it("should convert string to identifier", async () => {
    assert.equal(toIdentifier("Hello World"), "HelloWorld");
    assert.equal(toIdentifier("hello world"), "HelloWorld");
    assert.equal(toIdentifier("hello world too"), "HelloWorldToo");
  });
});

import { describe, expect, it } from "vitest";
import { useClickOutside, useEventListener } from "../index";

//对导出看是否成功做测试
describe("hooks/index", () => {
  it("useEventListener should be exported", () => {
    expect(useEventListener).toBeDefined();
  });
  it("useClickOutside should be exported", () => {
    expect(useClickOutside).toBeDefined();
  });
});

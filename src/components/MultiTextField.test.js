import { fireEvent, render, screen } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";
import { Primary, UnControlled } from "./MultiTextField.stories";

expect.extend(toHaveNoViolations);

describe("TextField", () => {
  let mockFn;
  beforeEach(() => {
    mockFn = jest.fn();
  });
  afterEach(() => {
    mockFn.mockRestore();
  });

  it("renders multi text field in primary state", () => {
    render(<UnControlled {...UnControlled.args} onChange={mockFn} />);
    const inputElem = screen.getByTestId("multitext-one");
    fireEvent.change(inputElem, { target: { value: "h" } });
    expect(inputElem.value).toBe("h");
    expect(mockFn.mock.calls.length).toBe(1);
    expect(mockFn.mock.calls[0][0]).toBe("h");
  });

  it("no accessibility violations", async () => {
    const { container } = render(<Primary {...Primary.args} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});

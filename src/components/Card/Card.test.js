import { render } from "@testing-library/react";
import { Card } from "./Card";

describe(Card, () => {
  it("wrap sections inside of it", () => {
    const { getByTestId } = render(
      <Card className="card-container">
        {" "}
        <div>{"testing context"}</div>{" "}
      </Card>,
    );
    const innerText = getByTestId("cardContainer");
    expect(innerText).toHaveTextContent("testing context");
  });
});

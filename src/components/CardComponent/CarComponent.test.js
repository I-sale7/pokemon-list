import { getByTestId, render } from "@testing-library/react";
import { CardComponent } from "./CardComponent";

describe(CardComponent, ()=> {
  it("wrap sections inside of it", ()=> {
    const { getByTestId } = render(<CardComponent className="card-container"> <div>{"testing context"}</div> </CardComponent>) 
    const innerText = getByTestId("cardContainer");
    expect(innerText).toHaveTextContent("testing context")
  })
})
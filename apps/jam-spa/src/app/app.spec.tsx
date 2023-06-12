import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import App from "./app";

const server = setupServer(
  rest.get("http://localhost:3000/mountains", (_, res, ctx) => {
    return res(ctx.json({}));
  }),
  rest.get("http://localhost:3000/mountains/aconcagua", (_, res) => {
    return res();
  })
);

describe("App", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it("should have a greeting as the title", () => {
    const { getByText } = render(<App />);
    expect(getByText(/Mountain-o-Pedia/)).toBeTruthy();
  });
});

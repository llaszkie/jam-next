import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";

import Home from "./home";
import { MemoryRouter } from "react-router-dom";

const server = setupServer(
  rest.get("http://localhost:3000/mountains", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          title: "Aconcagua",
          path: "/mountains/aconcagua",
          id: "aconcagua",
        },
      ])
    );
  })
);

describe("Home", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it("should render successfully", () => {
    const { baseElement } = render(<Home />);
    expect(baseElement).toBeTruthy();
  });

  it("should have a mountain list", async () => {
    const { findByText } = render(<Home />, {
      wrapper: ({ children }) => <MemoryRouter>{children}</MemoryRouter>,
    });
    expect(await findByText(/Aconcagua/)).toBeTruthy();
  });
});

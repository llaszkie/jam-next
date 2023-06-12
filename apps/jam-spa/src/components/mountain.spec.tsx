import { render } from "@testing-library/react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { MemoryRouter, Route, Routes } from "react-router-dom";

import Mountain from "./mountain";

const server = setupServer(
  rest.get("http://localhost:3000/mountains/aconcagua", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        title: "Aconcagua",
        path: "/mountains/aconcagua",
        description: "Aconcagua is a mountain in the Principal Cordillera",
        height: "6,962 m",
        id: "aconcagua",
      })
    );
  })
);

describe("Mountain", () => {
  beforeAll(() => {
    server.listen();
  });

  afterAll(() => {
    server.close();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  it("should have a mountain detail", async () => {
    const { findByText } = render(<Mountain />, {
      wrapper: ({ children }) => (
        <MemoryRouter initialEntries={["/aconcagua"]}>
          <Routes>
            <Route path=":mountainId" element={children} />
          </Routes>
        </MemoryRouter>
      ),
    });
    expect(
      await findByText(/Aconcagua is a mountain in the Principal Cordillera/)
    ).toBeTruthy();
    expect(await findByText(/6,962 m/)).toBeTruthy();
  });
});

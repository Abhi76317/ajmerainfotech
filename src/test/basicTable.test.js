import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from 'redux-mock-store';
import initState from "./mockData";
import BasicTable from "../component/Table";

const mockStore = configureStore([]);
const mockProps = {
  ...initState,
};
const store = mockStore({ ...mockProps });

describe('testing app component', () => {
  beforeAll(() => {
    render(
      <Provider store={store}>
        <BasicTable />
      </Provider>,
    )
  })

  test('testing table should render', () => {
    // console.log(screen.debug())
    expect(screen.getByRole('table')).toBeTruthy()
  });

  // test('testing table row length should render', () => {
  //   expect(screen.getByText('Charles Morris')).toBeTruthy()
  // });
});

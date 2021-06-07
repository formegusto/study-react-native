import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";
import { RootStore } from "..";
import { CounterAction, counterActionCreator } from "./actions";

const mapState = ({ counter }: RootStore) => ({
  number: counter.number,
});

const mapDispatch = (dispatch: Dispatch<CounterAction>) =>
  bindActionCreators<CounterAction, typeof counterActionCreator>(
    counterActionCreator,
    dispatch
  );

const CounterConnector = connect(mapState, mapDispatch);

export default CounterConnector;

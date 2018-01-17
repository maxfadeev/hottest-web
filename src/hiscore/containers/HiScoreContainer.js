import { connect } from 'react-redux';

import HiScore from '../views/HiScore';

const mapStateToProps = ({ hiscore }) => {
  return {
    hiscore
  };
};

export default connect(mapStateToProps)(HiScore);

import { connect } from 'react-redux';

import Header from 'src/components/Header';

const mapStateToProps = (state) => {
  return {
    categories: state.menu,
  };
};

const mapDispatchToProps = {};

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Header);

export default HeaderContainer;

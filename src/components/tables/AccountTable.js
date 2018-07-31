import React, { Component } from 'react';
import { connect } from 'react-redux';
import Dock from 'react-dock';
import { getLibrary } from '../../actions';
import HeadOne from '../base/HeadOne';
import HeadFour from '../base/HeadFour';
import { Flexcolumn, Flexrow } from '../base/FlexGrid';
import Card from '../base/Card';
import Close from '../base/Close';
import SideCard from '../base/SideCard';


class AccountTable extends Component {
  constructor(props){
    super(props);
    this.state = {
      isVisible: false,
      book: {}
    };
  }
  componentDidMount = () => this.props.getLibrary();

  showCard = (book) => this.setState({ isVisible: true, book});

  bookRender = (library) =>
    library.map(book => <Card key={book.id} book={book} showCard={this.showCard}/>)

  calculateValue = (library) =>  
    parseFloat(library.map(book => parseFloat(book.price)).reduce((a, b) => a + b)).toFixed(2);
  
  closeSide = () => this.setState({ isVisible: !this.state.isVisible });

  render() {
    const { library, loading, fetched } = this.props;

    if (!fetched && loading) {
      return <div>loading...</div>
    }

    return (
      <div>
      <Dock position='left' isVisible={this.state.isVisible} size={0.5}>
        <Close text='X' close={this.closeSide} />
        <SideCard book={this.state.book} />
      </Dock>
        <HeadOne text='My Collection' />
        <Flexrow paddTop='0' paddBtm='1em'>
          <Flexcolumn size={2}>
            <div>{library.length}</div>
            <div>Books</div>
          </Flexcolumn>
          <Flexcolumn size={2}>
            <span>Comics</span>
          </Flexcolumn>
          <Flexcolumn size={2}>
            <div>{this.calculateValue(library)}</div>
            <div>Total Value</div>
          </Flexcolumn>
        </Flexrow>
        <HeadFour text='Library' />
        {this.bookRender(library)}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  {
    library: state.library.data,
    fetched: state.library.fetched,
    loading: state.library.loading
  }
)

export default connect(mapStateToProps, { getLibrary })(AccountTable);
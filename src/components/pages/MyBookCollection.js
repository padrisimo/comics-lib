import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import AddBookForm from '../forms/AddBookForm';
import { postBook } from '../../actions';
import AccountTable from '../tables/AccountTable';
import { Button, Header, Icon, Modal, Grid } from 'semantic-ui-react';
import HeadOne from '../base/HeadOne';
import Container from '../base/Container'



class MyBookCollection extends Component {

  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  submit = data => {
    return this.props.postBook(data).then(() => this.handleOpen());
  }

  render() {
    return (
      <div>
        <Modal
          open={this.state.modalOpen}
          onClose={this.handleClose}
          basic
          size='small'
        >
          <Header icon='book' content='Congratulations!' />
          <Modal.Content>
            <h3>New book added to your Collection</h3>
          </Modal.Content>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' /> Ou Yeah!
          </Button>
          </Modal.Actions>
        </Modal>

        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8} style={styles.nopad}>
            <Container >
              <HeadOne text='Add new book' />
              <AddBookForm submit={this.submit} top="9500.00" />
            </Container>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8} style={styles.nopad}>
            <Container line>
              <AccountTable />
            </Container>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

const styles = {
  nopad: {
    padding: 0,
    textAlign: 'center'
  }
}

MyBookCollection.propTypes = {
  postBook: PropTypes.func.isRequired
}


export default connect(null, { postBook })(MyBookCollection)
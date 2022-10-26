import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { fetchImages } from './services/images-api';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { ErrorMessage } from './ErrorMessage/ErrorMessage';

class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    error: null,
    showLoader: false,
    showModal: false,
    modalImageURL: null,
    showErrorMessage: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSearchQuery = prevState.searchQuery;
    const nextSearchQuery = this.state.searchQuery;

    if (prevSearchQuery !== nextSearchQuery) {
      // console.log('Name changed');
      this.getImages(nextSearchQuery, this.state.page);
    }
  }

  getImages(searchQuery, page) {
    this.setState({ showLoader: true, showErrorMessage: false });
    fetchImages(searchQuery, page)
      .then(searchData =>
        this.setState(prevState => ({
          images: [...prevState.images, ...searchData.hits],
          page: prevState.page + 1,
          showLoader: false,
          showErrorMessage: true,
        }))
      )
      .catch(error => this.setState({ error }))
      .finally(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      });
  }

  handleFormSubmit = searchQuery => {
    this.setState({
      searchQuery: '',
      images: [],
      page: 1,
      error: null,
      showLoader: false,
      showModal: false,
      modalImageURL: null,
    });

    this.setState({ searchQuery: searchQuery });
  };

  loadMore = () => {
    this.getImages(this.state.searchQuery, this.state.page);
  };

  onImageClick = (largeImageURL, tags) => {
    this.setState({
      modalImageURL: { largeImageURL: largeImageURL, tags: tags },
    });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };

  render() {
    const { images, showModal, showLoader, showErrorMessage } = this.state;

    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />

        {images.length === 0 && showErrorMessage && (
          <ErrorMessage searchQuery={this.state.searchQuery} />
        )}

        <ImageGallery
          images={this.state.images}
          onImageClick={this.onImageClick}
        />
        {showLoader && <Loader />}

        {images.length > 0 && !showLoader && (
          <Button loadMore={this.loadMore} />
        )}

        {showModal && (
          <Modal
            onClose={this.toggleModal}
            modalImageURL={this.state.modalImageURL}
          />
        )}
      </>
    );
  }
}
export default App;

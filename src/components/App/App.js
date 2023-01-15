//VAR 1
// import PropTypes from 'prop-types';
// import { useState, useEffect } from 'react';
// import { ToastContainer } from 'react-toastify';
// import { toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { fetchImages } from '../../services/Images-api';
// import { Section, ErrorText, ErrorBox, Loader } from 'components';
// import { Route, Routes } from 'react-router-dom';
// import {
//   Container,
//   Searchbar,
//   ImageGallery,
//   ImageError,
// Layout,
// } from 'components';
// import { Layout } from 'path/to/components/Layout';

// export const App = () => {
//   const [imagesName, setImagesName] = useState('');
//   const [images, setImages] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalHits, setTotalHits] = useState(null);
//   const [error, setError] = useState(null);
//   const [status, setStatus] = useState('idle');

//   useEffect(() => {
//     const getImages = async (imagesName, page) => {
//       if (imagesName === '') {
//         return;
//       }
//       try {
//         setStatus('pending');
//         const {
//           hits,
//           // total,
//           totalHits,
//         } = await fetchImages(imagesName, page);
//         if (hits.length === 0) {
//           toast.info('No images were found for your request');
//           setStatus('idle');
//           return;
//         }
//         setImages(prevState => [...prevState, ...hits]);
//         setTotalHits(totalHits);
//         setStatus('resolved');
//       } catch (error) {
//         setError('rejected');
//       }
//     };
//     getImages(imagesName, page);
//   }, [imagesName, page]);

//   const handleSearchFormSubmit = imagesName => {
//     setImagesName(imagesName);
//     setPage(1);
//     setImages([]);
//     setStatus('idle');
//   };

//   if (status === 'idle') {
//     return (
//       <Section>
//         <Searchbar onSubmit={handleSearchFormSubmit} />
//         <ErrorBox>
//           <ErrorText>Add a photo to view or enter another name</ErrorText>
//         </ErrorBox>
//         <ToastContainer autoClose={3000} />
//       </Section>
//     );
//   }
//   if (status === 'pending') {
//     return (
//       <Section>
//         <Loader />
//       </Section>
//     );
//   }
//   if (status === 'rejected') {
//     return (
//       <Section>
//         <Searchbar onSubmit={handleSearchFormSubmit} />
//         <Container>
//           <ImageError message={error.message}>{error.message}</ImageError>
//         </Container>
//         <ToastContainer autoClose={3000} />
//       </Section>
//     );
//   }
//   if (status === 'resolved') {
//     return (
//       <Section>
//         <Searchbar onSubmit={handleSearchFormSubmit} />
//         <Container>
//           <ImageGallery imagesName={imagesName} images={images} />
//         </Container>
//         <ToastContainer autoClose={3000} />
//       </Section>
//     );
//   }
// };

// App.propTypes = {
//   state: PropTypes.shape({
//     imagesName: PropTypes.string.isRequired,
//     images: PropTypes.array.isRequired,
//     page: PropTypes.number.isRequired,
//     totalHits: PropTypes.number.isRequired,
//     error: PropTypes.string.isRequired,
//     status: PropTypes.string.isRequired,
//   }),
// };

//----------------------------------------------------
//VAR 2
import { Route, Routes } from 'react-router-dom';
import { Home } from '../../pages/Home';
import { ProductDetails } from '../../pages/ProductDetails';
import { Movies } from '../../pages/MovieList';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>
            Home
          </Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<ProductDetails />} />
      </Routes>
    </Container>
  );
};
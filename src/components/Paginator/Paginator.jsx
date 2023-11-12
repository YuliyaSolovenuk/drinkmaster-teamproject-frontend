import React from 'react';
import Stack from '@mui/material/Stack';
import { StyledPagination, stackStyles } from './Paginator.styled';
import { PaginationItem } from '@mui/material';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import authSelectors from 'redux/auth/authSelectors';
import { StyledPaginationLight } from './PaginatorLight.styled';

const Paginator = ({ totalPages, onPageChange, currentPage, path }) => {
  const themeSelector = useSelector(authSelectors.selectTheme);
  const isDarkTheme = themeSelector === 'dark';

  const PaginatorStyles = isDarkTheme
    ? StyledPagination
    : StyledPaginationLight;

  return (
    <Stack spacing={2} sx={stackStyles}>
      <PaginatorStyles
        count={totalPages}
        page={currentPage}
        onChange={(_, pageNum) => onPageChange(pageNum)}
        renderItem={item => {
          return (
            <PaginationItem
              component={Link}
              to={`${path}?page=${item.page}`}
              {...item}
            />
          );
        }}
      />
    </Stack>
  );
};

// const Paginator = ({totalDrinks, drinksPerPage}) => {
//     const [currentPage, setCurrentPage] = useState(1);
//     const totalPages = Math.ceil(totalDrinks / drinksPerPage);

//     const handlePrevPage = () => {
//         if (currentPage > 1) {
//             setCurrentPage(currentPage - 1);
//         }
//     };

//     const handleNextPage = () => {
//         if (currentPage < totalPages) {
//             setCurrentPage(currentPage + 1);
//         }
//     };

//     if (totalPages <= 1) {
//         return null;
//     };

//     const visiblePageCount = 5;
//     const halfVisiblePageCount = Math.floor(visiblePageCount / 2);

//     const firstVisiblePage = Math.max(1, currentPage - halfVisiblePageCount);
//     const lastVisiblePage = Math.min(totalPages, firstVisiblePage + visiblePageCount - 1);

//     return (
//         <PagContainer>
//             <Button type='button' onClick={handlePrevPage} disabled={currentPage === 1}>
//                 <ReactSVG src={prev}/>
//             </Button>
//             <NumberContainer>
//             {Array.from({ length: lastVisiblePage - firstVisiblePage + 1 }, (_, index) => (
//                 <NumberButton
//                     key={index}
//                     onClick={() => setCurrentPage(firstVisiblePage + index)}
//                     active={firstVisiblePage + index === currentPage}
//                 >{firstVisiblePage + index }</NumberButton>
//             ))}
//                 </NumberContainer>
//             <Button type='button' onClick={handleNextPage} disabled={currentPage === totalPages}>
//                 <ReactSVG src={next}/>
//             </Button>
//         </PagContainer>
//     )
// }

export default Paginator;

// const paginate = (pageNumber) => setCurrentPage(pageNumber);

// // Pagination component or controls
// const Pagination = () => {
//   const pageNumbers = [];

//   for (let i = 1; i <= Math.ceil(carList.length / carsPerPage); i++) {
//     pageNumbers.push(i);
//   }

//   return (
//     <nav>
//       <ul className="pagination">
//         <li>
//           <button
//             onClick={() => paginate(currentPage > 1 ? currentPage - 1 : 1)}
//             disabled={currentPage === 1}
//           >
//             Previous
//           </button>
//         </li>
//         {pageNumbers.map((number) => (
//           <li key={number}>
//             <button onClick={() => paginate(number)}>{number}</button>
//           </li>
//         ))}
//         <li>
//           <button
//             onClick={() =>
//               paginate(
//                 currentPage < Math.ceil(carList.length / carsPerPage)
//                   ? currentPage + 1
//                   : currentPage
//               )
//             }
//             disabled={currentPage === Math.ceil(carList.length / carsPerPage)}
//           >
//             Next
//           </button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

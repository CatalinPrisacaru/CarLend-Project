import styled from "styled-components";

// Penginds.js styled

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
  gap: 10px; /* Add gap between items */
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 30px;
`;

export const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #218838;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const PaginationButton = styled.button`
  padding: 8px 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 0 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

export const PerPageButton = styled.button`
  padding: 8px 16px;
  background-color: transparent;
  border: 2px solid ${(props) => (props.active ? "#007bff" : "#6c757d")};
  color: ${(props) => (props.active ? "#007bff" : "#6c757d")};
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
    color: ${(props) => (props.active ? "white" : "#007bff")};
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 10px; /* Add space between the search inputs */
`;

export const SearchInput = styled.input`
  flex: 1;
  padding: 10px;
  margin-right: 10px;
  border: 1px solid #ced4da;
  border-radius: 5px;
  font-size: 14px;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
  font-size: 1rem;
  font-family: Arial, sans-serif;
`;

export const TableHead = styled.th`
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  white-space: normal;
`;

// TableView.js styled

export const TableRow = styled.tr`
  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCell = styled.td`
  padding: 12px;
  border-bottom: 1px solid #ddd;
`;

export const DetailsButton = styled.button`
  padding: 8px 16px;
  width: 110px;
  margin: 0px 15px;
  background-color: transparent;
  border: 2px solid #007bff;
  color: #007bff;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #007bff;
    color: white;
  }
`;

export const EditButton = styled.button`
  padding: 8px 16px;
  width: 110px;
  margin: 0px 15px;
  background-color: transparent;
  border: 2px solid #dc3545;
  color: #dc3545;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #dc3545;
    color: white;
  }
`;

export const StatusButton = styled.button`
  padding: 8px 16px;
  width: 110px;
  background-color: transparent;
  border: 2px solid ${(props) => (props.status === 0 ? "#28a745" : "#dc3545")};
  color: ${(props) => (props.status === 0 ? "#28a745" : "#dc3545")};
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: ${(props) =>
      props.status === 0 ? "#28a745" : "#dc3545"};
    color: white;
  }
`;

// CardView.js styled

export const Card = styled.div`
  display: flex;
  width: 100%; /* Reduce the card width */
  height: 500px; /* Reduce the card height */
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
`;

export const CardImage = styled.img`
  width: 500px;
  height: auto;
  object-fit: cover;
`;

export const CardContent = styled.div`
  flex: 1;
  padding: 20px;
`;

export const CardTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

export const CardDetail = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const CardButtons = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 20px;
`;

export const RentButton = styled.button`
  background-color: transparent;
  border: 2px solid #4caf50;
  width: 110px;
  color: #4caf50;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #4caf50;
    color: white;
  }
`;

import styled from 'styled-components';

export const TopMenuWrapper = styled.div`
  background: ${({ theme }) => '#EDF5FF'};
  width: 100%;
  height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1.4rem;
  & .breadcrumb {
    @media (max-width: 400px) {
      display: none;
    }
  }
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  & span,
  & i {
    margin-right: 20px;
  }
  & .profile-item{
    display: flex;
    align-items: center;
  }
  @media (max-width: 400px) {
    & .location-selector{
      width:240px;
    }
    & span {
      display:none;
    }
  
`;

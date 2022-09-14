import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";

const Profile = ({ fullName, bio, profession, children, showName }) => {
  const handleName = (event) => {
    event.preventDefault();
    showName(fullName);
  };
  return (
    <div>
      <Card border="dark" style={{ width: "30rem" }}>
        {children}
        <Card.Body>
          <Card.Title>{fullName}</Card.Title>
          <Card.Text>{bio}</Card.Text>
          <Card.Text>{profession}</Card.Text>
          <Button variant="dark" onClick={handleName}>
            Profile user
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
Profile.defaultProps = {
  fullName: "Default Name",
};
export default Profile;

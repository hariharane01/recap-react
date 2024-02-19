import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function ProductCard({data={}}) {
  return (
    <Card >
      <Card.Img variant="top" src={data.imageUrl} />
      <Card.Body>
        <Card.Title>{data.name}</Card.Title>
        <Card.Text className="fw-5">
        {data.price}
        </Card.Text>
        {data?.size?.length >0 ?         <Button variant="primary">View Option</Button>
:        <Button variant="primary">Add Cart</Button>
}
      </Card.Body>
    </Card>
  );
}

export default ProductCard;

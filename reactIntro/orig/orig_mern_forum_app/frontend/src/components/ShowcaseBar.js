import { Container } from "react-bootstrap"

export const ShowcaseBar = (props) => {
    return(
        <Container>
            <div className="showcaseBar">
                <h4>{props.pageName}</h4>
                <Form className="d-flex">
                    <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    />
                    <Button variant="outline-success">Search</Button>
                </Form>
            </div>
        </Container>
    )
}
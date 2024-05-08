import '../style/faq.css';
import Accordion from 'react-bootstrap/Accordion';
import { Form } from 'react-bootstrap';

const fontColor = {
    color: '#3D3D3B',
};

export const FAQ = () => {
    return (

        <Accordion className="questionConteiner" defaultActiveKey="0">
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                <h3 style={{
                    fontSize: '1.5rem', marginBottom: '40px', marginTop: '40px', color: '#3D3D3B' }}>How can we help you?</h3>
                <Form.Control
                    style={{ margin: '10px', height: '50px', width: '600px', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' }}
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                />
            </div>


            <div style={{
                marginTop: '50px', marginBottom: '40px'}}>
                <Accordion.Item className="faqItem" eventKey="0">
                    <Accordion.Header style={fontColor}>What is Manuskrypt and how does it work?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="1">
                    <Accordion.Header style={fontColor}>What devices can I use to access Manuskrypt?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="2">
                    <Accordion.Header style={fontColor}>How do I sign up for a Manuskrypt subscription?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="3">
                    <Accordion.Header style={fontColor}>How do I sign up for a Manuskrypt subscription?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="4">
                    <Accordion.Header style={fontColor}>What types of books are available on Manuskrypt?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="5">
                    <Accordion.Header style={fontColor}>How frequently are new titles added to the Manuskrypt library?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="6">
                    <Accordion.Header style={fontColor}>Is there a limit to how many books I can read per month?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item className="faqItem" eventKey="7">
                    <Accordion.Header style={fontColor}>How do I cancel my Manuskrypt subscription?</Accordion.Header>
                    <Accordion.Body style={fontColor}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>


            </div>
        </Accordion>
    );
}

export default FAQ;
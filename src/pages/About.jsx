import Card from '../components/shared/Card';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Card>
      <h1>About This Project</h1>
      <p>This is a React app to leave feedback for a product or service.</p>
      <p>Version: 1.0.0</p>
      <p>
        <Link to='/'>Back to main page</Link>
      </p>
    </Card>
  );
}

export default About;

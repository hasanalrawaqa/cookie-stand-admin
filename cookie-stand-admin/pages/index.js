import Head from 'next/head';
import { useState } from 'react';
import Header from '@/components/Header';
import CreateForm from '@/components/createForm';
import ReportTable from '@/components/ReportTable';
import Footer from '@/components/Footer';
import LoginForm from '@/components/LoginForm';
import CookieStandAdmin from '@/components/CookieStandAdmin';



 

export default function Home() {

  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (username, password) => {
    // Authenticate the user using the provided credentials
    // If successful, setLoggedIn(true)
  };
  // State to store the cookie stand data
  const [cookieStands, setCookieStands] = useState([]);

  // Function to add a new cookie stand
  const addCookieStand = (event) => {
    event.preventDefault();

    // Create a new cookie stand object
    const newCookieStand = {
      id: cookieStands.length + 1, // Generate a unique ID
      location: event.target.location.value,
      minCustomersPerHour: parseInt(event.target.minCustomersPerHour.value),
      maxCustomersPerHour: parseInt(event.target.maxCustomersPerHour.value),
      avgCookiesPerSale: parseFloat(event.target.avgCookiesPerSale.value),
    };

    // Update the cookie stands state with the new cookie stand
    setCookieStands([...cookieStands, newCookieStand]);

    // Reset the form fields
    event.target.reset();
  };

  return (
  <div>
    <Head>
      <title>Cookie Stand Admin</title>
    </Head>
    <Header />
    {loggedIn ? (
        <CookieStandAdmin apiUrl={process.env.NEXT_PUBLIC_API_URL} />
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    <CreateForm  handeler={addCookieStand}/>
    <ReportTable handeler={cookieStands.length} handeler2={cookieStands}/>
    <Footer  />
  </div>
);
  }
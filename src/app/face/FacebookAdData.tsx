'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

declare global {
  interface Window {
    FB: any;
    fbAsyncInit: () => void;
  }
}

export default function FacebookAdData() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [adData, setAdData] = useState<any[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Load the Facebook SDK asynchronously
    const loadFacebookSDK = () => {
      window.fbAsyncInit = function() {
        window.FB.init({
          appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID,
          cookie: true,
          xfbml: true,
          version: 'v21.0'
        });
        
        window.FB.getLoginStatus(function(response: any) {
          setIsLoggedIn(response.status === 'connected');
        });
      };

      (function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s) as HTMLScriptElement;
        js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode!.insertBefore(js, fjs);
      }(document, 'script', 'facebook-jssdk'));
    };

    loadFacebookSDK();
  }, []);

  const handleLogin = () => {
    window.FB.login(function(response: any) {
      if (response.authResponse) {
        setIsLoggedIn(true);
        fetchAdData();
      } else {
        setError('Facebook login failed');
      }
    }, {scope: 'ads_read'});
  };

  const fetchAdData = () => {
    setLoading(true);
    setError(null);
    window.FB.api(
      '/me/adaccounts',
      'GET',
      {"fields":"name,account_id,amount_spent"},
      function(response: any) {
        if (response && !response.error) {
          setAdData(response.data);
        } else {
          setError(response.error.message || 'Failed to fetch ad data');
        }
        setLoading(false);
      }
    );
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle>Facebook Ad Data</CardTitle>
        <CardDescription>View your Facebook ad account data</CardDescription>
      </CardHeader>
      <CardContent>
        {!isLoggedIn ? (
          <Button onClick={handleLogin}>Login with Facebook</Button>
        ) : loading ? (
          <p>Loading ad data...</p>
        ) : error ? (
          <p className="text-red-500">{error}</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Account Name</TableHead>
                <TableHead>Account ID</TableHead>
                <TableHead>Amount Spent</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {adData.map((account) => (
                <TableRow key={account.account_id}>
                  <TableCell>{account.name}</TableCell>
                  <TableCell>{account.account_id}</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </CardContent>
    </Card>
  )
}


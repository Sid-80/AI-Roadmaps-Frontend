"use client"
import * as React from 'react';
import { useState, ChangeEvent, FormEvent } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

export default function Page() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/api/v1/user/signin', formData, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      console.log(response.status)
      if (response.status === 201 || response.status === 200) {
        console.log('Form submitted successfully:', response.data);
        router.push('/')
      } else {
        console.error('Form submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  const router = useRouter();
  console.log(formData);

  return (
    <Card className="w-full flex flex-col md:flex-row max-w-lg md:max-w-2xl lg:max-w-4xl absolute bg-white shadow-xl rounded-lg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 h-auto min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
      <div className="w-full md:w-1/2 lg:w-1/3 bg-[#243B55] flex items-center justify-center flex-col text-center p-4 md:p-6 rounded-b-lg md:rounded-bl-none md:rounded-l-lg min-h-[30vh] md:min-h-[40vh] lg:min-h-[50vh]">
        <CardHeader className="w-full">
          <CardTitle className="block text-2xl text-white font-bold">Hello, Friend!</CardTitle>
          <CardDescription className="text-sm text-white leading-5 tracking-wide my-6 mt-[25px] mb-[35px] font-light">
            To keep connected with us please login with your personal info
          </CardDescription>
        </CardHeader>
      </div>
      <div className="w-full md:w-2/3 lg:w-3/4 p-4 md:p-6 flex flex-col items-center">
        <CardContent className="w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <div className="w-full items-center gap-4 justify-center flex flex-col">
              <h1 className="block text-2xl text-[#141E30] font-bold">Sign Up</h1>
              <div className="flex gap-2 justify-center">
                <a href="#">
                  <Image src="/fb.svg" alt="" width={30} height={24} />
                </a>
                <a href="#">
                  <Image src="/google.svg" alt="" width={30} height={24} />
                </a>
                <a href="#">
                  <Image src="/linkedin.svg" alt="" width={30} height={24} />
                </a>
              </div>
              <span className="text-[#141E30]">or use your account</span>
              <div className="flex flex-col space-y-1.5 w-full">
                <Input id="username" placeholder="Name" className="w-full" value={formData.username} onChange={handleChange} />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Input id="email" placeholder="Email" className="w-full" value={formData.email} onChange={handleChange} />
              </div>
              <div className="flex flex-col space-y-1.5 w-full">
                <Input id="password" placeholder="Password" className="w-full" value={formData.password} onChange={handleChange} />
              </div>
              <CardFooter className="flex mt-4 justify-center w-full">
                <Button type="submit">Sign Up</Button>
              </CardFooter>
            </div>
          </form>
        </CardContent>
      </div>
    </Card>
  );
}

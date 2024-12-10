"use client"

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';

// Simulação do dicionário de avaliações
const reviewsData = {
  "reviews": [
    { "id": 1, "rating": 5, "date": '26/03/2024', "comment": "Produto excelente!" },
    { "id": 2, "rating": 4, "date": '28/06/2024', "comment": "Muito bom, mas poderia ser mais barato." },
    { "id": 3, "rating": 3, "date": '23/07/2024', "comment": "Produto ok, atende às expectativas." }
  ]
};

const ReviewsPage = () => {
  const [reviews, setReviews] = useState([]);

  // Carrega as avaliações do dicionário quando o componente é montado
  useEffect(() => {
    setReviews(reviewsData.reviews);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className='flex w-full items-center justify-between px-4 pb-4'>
        <h2 className="text-xl font-semibold text-center">Últimas Avaliações</h2>
        <Link href={'nome_servidor/feedbacks'}>
          <Button>
            Ver todas
          </Button>
        </Link>
      </div>
        {reviews.length === 0 ? (
          <p>Nenhuma avaliação disponível.</p>
        ) : (
          <ul className="space-y-4 w-full">
            {reviews.map((review) => (
              <li
                key={review.id}
                className="bg-blue-800 p-4 rounded-lg shadow-md"
              >
                <div className="flex justify-between items-center">
                  <div className='flex items-center'>
                    <div className="text-yellow-400 font-medium text-xl">
                      {'★'.repeat(review.rating)}
                      {'☆'.repeat(5 - review.rating)}
                    </div>
                    <span className="ml-2 font-medium">({review.rating}/5)</span>
                  </div>
                  <span className="text-sm font-light">{review.date}</span>
                </div>
                <p className="mt-2 font-normal text-sm">{review.comment}</p>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
};

export default ReviewsPage;

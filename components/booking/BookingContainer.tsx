'use client';
import { useProperty } from '@/utils/store';
import ConfirmBooking from './ConfirmBooking';
import BookingForm from './BookingForm';

const BookingContainer = () => {
  const state = useProperty((state) => state);
  console.log(state);
  return (
    <div className="w-full">
      <BookingForm />
      <ConfirmBooking />
    </div>
  );
};

export default BookingContainer;

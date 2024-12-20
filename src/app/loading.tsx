import { Spinner } from '@nextui-org/react';

export default function Loading() {
  return (
    <div className="flex justify-center items-start">
      <Spinner className="mt-4" />
    </div>
  );
}

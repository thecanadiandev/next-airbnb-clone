import { Button } from '@/components/ui/button';

function HomePage() {
  return (
    <>
      <h1 className="text-3xl">HomePage</h1>
      <div>
        <Button variant="default" size="lg">
          {' '}
          Click me{' '}
        </Button>
      </div>
    </>
  );
}
export default HomePage;

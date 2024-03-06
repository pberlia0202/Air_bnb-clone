import { Container } from "components/atoms/Container";
import { CardHouse } from "components/molecules/cards/CardHouse";
import Map from "./Map";
// import MapBox from "path-to-your-map-component"; // Import your Map component

export function Home({ datas }) {
  return (
    <main className="mt-6">
      <Container className="grid grid-cols-10 md:gap-x-4 md:gap-y-4 xl:gap-x-0 xl:gap-y-8">
        {/* Data displayed in the right column (spanning 3 out of 10 columns) */}
        <Container className="grid grid-cols-1 sm:grid-cols-2 col-span-12 md:grid-cols-3 gap-x-4 gap-y-6 xl:gap-x-6 xl:gap-y-8 sm:col-span-12 md:col-span-12 xl:col-span-7">
          <>
            {
              datas.map((house) => (
              <CardHouse key={house.id} {...house} />
            ))
            }
          </>
        </Container>
         {/* MapBox component in the left column (spanning 7 out of 10 columns) */}
         <Container className="hidden xl:inline-flex xl:min-w-[480px] xl:col-span-3 my-0 py-0 mx-0 px-0">
              <Map />
         </Container>
      </Container>
    </main>
  );
}

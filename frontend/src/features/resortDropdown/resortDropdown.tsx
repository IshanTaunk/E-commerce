import { useMemo } from "react";
import Dropdown from "../../components/Dropdown";
import type { Resort } from "../../services/shared/model/Resort";
import { useHotels } from "./hooks/useHotels";

interface ResortDropdownProps {
  onSelect?: (resort: Resort) => void;
}

const ResortDropdown = ({ onSelect }: ResortDropdownProps) => {
  const { data: hotels = [], isFetching, isError, error, refetch } = useHotels();

  const resortDropdownOptions = useMemo(
    () =>
      hotels.map((resort: Resort) => ({
        displayText: resort.name,
        value: resort.id,
        isEnabled: true,
      })),
    [hotels]
  );

  const handleSelect = (hotelId: string) => {
    const selectedHotel = hotels.find((h) => h.id === hotelId);
    if (selectedHotel && onSelect) {
      onSelect(selectedHotel);
    }
  };

  const handleOpen = () => {
    void refetch();
  };

  return (
    <div>
      {isFetching && <p>Loading hotels...</p>}
      {isError && (
        <p style={{ color: "red" }}>
          Error: {error instanceof Error ? error.message : "Failed to fetch hotels"}
        </p>
      )}
      <Dropdown
        options={resortDropdownOptions}
        placeholder="Where"
        onChange={handleSelect}
        onOpen={handleOpen}
      />
    </div>
  );
};

export default ResortDropdown;
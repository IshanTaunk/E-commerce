import { useMemo } from "react";
import Dropdown from "../../components/Dropdown";
import type { Resort } from "../../services/shared/model/Resort";

interface ResortDropdownProps {
  hotels: Resort[];
  onSelect?: (resort: Resort) => void;
}

const ResortDropdown = ({ hotels, onSelect }: ResortDropdownProps) => {

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

  return (
    <div>
      <Dropdown
        options={resortDropdownOptions}
        placeholder="Where"
        onChange={handleSelect}
      />
    </div>
  );
};

export default ResortDropdown;
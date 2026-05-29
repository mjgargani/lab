import randomId from "@/shared/utils/randomId";
import Icon from "../Icon";
import { type FilterProps } from "./types";
import React, { useState, type PropsWithChildren } from "react";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

const Filter: React.FC<PropsWithChildren<FilterProps>> = ({
  dataTestId = randomId("filter"),
  repoLength,
  filteredLength,
  filters,
  handleFilter,
}) => {
  const [showFilter, setShowFilter] = useState<boolean>(false);
  return (
    <div
      data-testid={dataTestId}
      className="container flex flex-wrap gap-2 mb-2 justify-center"
    >
      <Badge
        variant="secondary"
        className="flex gap-2 whitespace-nowrap px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer"
        onClick={() => {
          setShowFilter(!showFilter);
        }}
      >
        {showFilter ? "Ocultar" : "Filtrar"}{" "}
        <span>
          ({showFilter ? <Icon i={"eye"} /> : <Icon i={"eye2"} />}{" "}
          {filteredLength})
        </span>
      </Badge>
      <Badge
        variant="secondary"
        className="flex gap-2 items-center whitespace-nowrap px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer"
        hidden={!showFilter}
      >
        <Checkbox
          id="all"
          value="all"
          onCheckedChange={(checked) => {
            const ev = {
              target: { name: "all", value: "all", checked },
            } as unknown as React.ChangeEvent<HTMLInputElement>;
            handleFilter(ev);
          }}
          checked={!filters.some((el) => !el.selected)}
        />
        <label htmlFor="all" className="flex items-center gap-1 cursor-pointer">
          <Icon i={"all"} /> TODOS ({repoLength})
        </label>
      </Badge>
      {filters?.map((el, i) => (
        <Badge
          key={i}
          variant="secondary"
          className="flex gap-2 items-center whitespace-nowrap px-3 py-1 text-sm font-semibold text-gray-700 cursor-pointer"
          hidden={!showFilter}
        >
          <Checkbox
            id={el.name}
            value={el.name}
            checked={el.selected}
            onCheckedChange={(checked) => {
              const ev = {
                target: { name: el.name, value: el.name, checked },
              } as unknown as React.ChangeEvent<HTMLInputElement>;
              handleFilter(ev);
            }}
          />
          <label
            htmlFor={el.name}
            className="flex items-center gap-1 cursor-pointer"
          >
            <Icon i={el.name} />{" "}
            {el.name
              .replace("archive", "ARQUIVO")
              .replace("lrn", "APRENDIZAGEM")
              .toUpperCase()}{" "}
            ({el.recurrence})
          </label>
        </Badge>
      ))}
    </div>
  );
};

export default Filter;

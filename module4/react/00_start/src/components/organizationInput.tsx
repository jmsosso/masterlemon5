import * as React from 'react';

interface Props {
  organizationName: string;
  onChange: (event) => void;
}

export const OrganizationInput = (props: Props) =>
    <>
      <label>Organization name:</label>
      <input value={props.organizationName} onChange={props.onChange}/>
    </>

import * as React from 'react';
import { MemberEntity } from '../../model/member';
import { memberAPI } from '../../api/memberAPI';
import { MemberRow } from './memberRow';
import { MemberHead } from './memberHead';
import {} from 'core-js';
import { OrganizationInput } from '../organizationInput';

interface Props {
}

// We define members as a state (the compoment holding this will be a container
// component)
interface State {
  organization: string;
  members: Array<MemberEntity>;
}

// Nice tsx guide: https://github.com/Microsoft/TypeScript/wiki/JSX
export class MembersTableComponent extends React.Component<Props, State> {

  constructor(props: Props) {
    super(props);
    // set initial state
    this.state = {
      organization: 'lemoncode',
      members: [],
    };
  }

  loadMembers = () => {
    memberAPI.getAllMembers(this.state.organization).then((members) =>
      this.setState({ members: members })
    );
  }

  updateOrganizationName = (event) => {
    this.setState({ organization: event.target.value });
  }

  public render() {

    return (
      <div className="row">
        <h2>Members Page</h2>
        <OrganizationInput
          organizationName={this.state.organization}
          onChange={this.updateOrganizationName}
        />
        <button onClick={this.loadMembers}>Load</button>
        <table className="table">
          <thead>
            <MemberHead />
          </thead>
          <tbody>
            {
              this.state.members.map((member: MemberEntity) =>
                <MemberRow key={member.id} member={member} />
              )
            }
          </tbody>
        </table>
      </div>
    );
  }
}

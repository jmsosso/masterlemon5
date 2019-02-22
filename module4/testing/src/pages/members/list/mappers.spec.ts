import { mapMemberListModelToVM } from './mappers';
import * as model from '../../../rest-api/model';
import * as vm from './viewModel';

describe('Members mapper tests', () => {
  it('should return an empty array when members is undefined', () => {
    // Arrange
    const members = undefined;

    // Act
    const result = mapMemberListModelToVM(members);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return an empty array when members is null', () => {
    // Arrange
    const members = null;

    // Act
    const result = mapMemberListModelToVM(members);

    // Assert
    expect(result).toEqual([]);
  });

  it('should return an empty array when members is empty', () => {
    // Arrange
    const members = [];

    // Act
    const result = mapMemberListModelToVM(members);

    // Assert
    expect(result).toEqual([]);
  });

  it('should map a single member', () => {
    // Arrange
    const members: model.Member[] = [
      {
        id: 1,
        login: 'login',
        avatar_url: 'avatar'
      }
    ];

    // Act
    const result = mapMemberListModelToVM(members);

    // Assert
    const expectedResult: vm.Member[] = [
      {
        id: 1,
        name: 'login',
        avatarUrl: 'avatar'
      }
    ];
    expect(result).toEqual(expectedResult);
  });

  it('should map a two members', () => {
    // Arrange
    const members: model.Member[] = [
      {
        id: 1,
        login: 'login',
        avatar_url: 'avatar'
      },
      {
        id: 2,
        login: '',
        avatar_url: ''
      }
    ];

    // Act
    const result = mapMemberListModelToVM(members);

    // Assert
    const expectedResult: vm.Member[] = [
      {
        id: 1,
        name: 'login',
        avatarUrl: 'avatar'
      },
      {
        id: 2,
        name: '',
        avatarUrl: ''
      }
    ];
    expect(result).toEqual(expectedResult);
  });
});
using System.Threading.Tasks;

namespace API.Interfaces
{
    public interface IUnitOfWork
    {
         IUserRepository UserRepository {get;}
         IMessageRepositry MessageRepositry {get;}
         ILikesRepository LikesRepository {get;}
         IPhotoRepository PhotoRepository {get;}
         Task<bool> Complete();
         bool HasChanges();
    }
}
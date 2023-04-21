import { Module } from '@nestjs/common';
import { CommentModule } from './comment/comment.module';
import { IsExist } from 'src/utils/validators/is-exists.validator';
import { IsNotExist } from 'src/utils/validators/is-not-exists.validator';
import { ResendService } from 'src/resend/resend.service';
import { FavoriteModule } from './favorite/favorite.module';
import { GameCompletionModule } from './game-completion/gameCompletion.module';
import { LikeModule } from './like/like.module';
import { PlayerModule } from './player/player.module';
import { PlayerFollowModule } from './player-follow/player-follow.module';
import { PlayerNFTModule } from './player-nft/player-nft.module';
import { QueryResultCacheModule } from './query-result-cache/queryResultCache.module';
import { ReplyModule } from './reply/reply.module';
import { SceneModelModule } from './sceneModel/sceneModel.module';
import { SceneCollaboratorModule } from './sceneCollaborator/sceneCollaborator.module';

@Module({
  imports: [
    CommentModule,
    FavoriteModule,
    GameCompletionModule,
    LikeModule,
    PlayerModule,
    PlayerFollowModule,
    PlayerNFTModule,
    QueryResultCacheModule,
    ReplyModule,
    SceneModelModule,
    SceneCollaboratorModule,
    SceneModelModule,
  ],
  controllers: [],
  providers: [IsExist, IsNotExist, ResendService],
  exports: [],
})
export class OwlandoModule {}
